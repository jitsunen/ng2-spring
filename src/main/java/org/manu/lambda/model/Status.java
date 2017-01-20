package org.manu.lambda.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by parth on 20/01/17.
 */
public class Status {
    private final State state;
    private final String result;
    private final Command command;

    public Status(State state, String result, Command command) {
        this.state = state;
        this.result = result;
        this.command = command;
    }

    public Status with(State state) {
        return new Status(state, this.result, this.command);
    }

    public Status with(State state, String result) {
        return new Status(state, result, this.command);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("state", state)
                .append("result", result)
                .append("command", command)
                .toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (!(o instanceof Status)) return false;

        Status status = (Status) o;

        return new EqualsBuilder()
                .append(state, status.state)
                .append(result, status.result)
                .append(command, status.command)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(state)
                .append(result)
                .append(command)
                .toHashCode();
    }

    public State getState() {
        return state;
    }

    public String getResult() {
        return result;
    }

    public Command getCommand() {
        return command;
    }
}
