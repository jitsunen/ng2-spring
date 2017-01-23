package org.manu.lambda.controller;

import com.google.common.collect.Lists;
import org.manu.lambda.model.Command;
import org.manu.lambda.model.State;
import org.manu.lambda.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;

/**
 * Created by parth on 20/01/17.
 */
@Controller
public class LambdaOnPiController {

    @Autowired
    @Qualifier("asyncTaskExecutor")
    private AsyncTaskExecutor taskExecutor;

    private final ScriptEngine engine;

    public LambdaOnPiController() {
        ScriptEngineManager manager = new ScriptEngineManager();
        this.engine = manager.getEngineByName("javascript");
    }

    private List<Status> statuses = Lists.newArrayList();

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, path = "/submitCommand", produces = {"application/json"})
    public
    @ResponseBody
    String acceptCommand(@RequestParam("command") String command, @RequestParam("clientId") String clientId) {
        System.out.println("received command " + command);
        Future<String> commandFuture = submitCommand(command);
        statuses.add(new Status(commandFuture, new Command(command, clientId)));
        return "{\"result\":\"fine\"}";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, path = "/status", produces = {"application/json"})
    public
    @ResponseBody
    List<Status> getStatuses() {
        return statuses;
    }

    private Future<String> submitCommand(String command) {
        return taskExecutor.submit(new Callable<String>() {
            @Override
            public String call() throws Exception {
                return engine.eval(command).toString();
            }
        });
    }

    @Bean(name = "asyncTaskExecutor")
    public AsyncTaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(25);
        return executor;
    }
}
