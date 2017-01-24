package org.manu.lambda.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.concurrent.Future;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.sym.error;

/**
 * Created by parth on 20/01/17.
 */
public class Status {
    private final Command command;
    private final Future<String> commandFuture;

    public Status(Future<String> commandFuture, Command command) {
        this.command = command;
        this.commandFuture = commandFuture;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("state", getState())
                .append("result", getResult())
                .append("command", command)
                .toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (!(o instanceof Status)) return false;

        Status status = (Status) o;

        return new EqualsBuilder()
                .append(getState(), status.getState())
                .append(getResult(), status.getResult())
                .append(command, status.command)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(getState())
                .append(getResult())
                .append(command)
                .toHashCode();
    }

    public State getState() {
        return (commandFuture.isDone()) ? State.COMPLETED : State.PROCESSING;
    }

    public String getResult() {
        String result = "";
        try {
            if (commandFuture.isDone()) {
                result = "[Result] " + commandFuture.get();
            }
        } catch (Exception e) {
            result = "[Error] " + e.getMessage();
        }
        return result;
    }

    public Command getCommand() {
        return command;
    }
}
