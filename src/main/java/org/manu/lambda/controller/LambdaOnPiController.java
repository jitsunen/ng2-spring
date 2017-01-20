package org.manu.lambda.controller;

import com.google.common.collect.Lists;
import org.manu.lambda.model.Command;
import org.manu.lambda.model.State;
import org.manu.lambda.model.Status;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * Created by parth on 20/01/17.
 */
@Controller
public class LambdaOnPiController {

    private List<Status> statuses = Lists.newArrayList();

    @MessageMapping("/submit")
    @SendTo("/topic/statuses")
    public List<Status> accept(Command command) {
        // submit command for processing.
        // retrieve all statuses.
        // send status
        this.statuses.add(new Status(State.RECEIVED, "", command));
        return getStatuses();
    }

    public List<Status> getStatuses() {
        return statuses;
    }
}
