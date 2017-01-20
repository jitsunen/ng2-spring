package org.manu.lambda.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by parth on 20/01/17.
 */
public class Command {
    private final String javascriptCommand;
    private final String clientId;

    @JsonCreator
    public Command(@JsonProperty("command") String javascriptCommand, @JsonProperty("clientId") String clientId) {
        this.javascriptCommand = javascriptCommand;
        this.clientId = clientId;
    }

    public String getJavascriptCommand() {
        return javascriptCommand;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("javascriptCommand", javascriptCommand)
                .append("clientId", clientId)
                .toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (!(o instanceof Command)) return false;

        Command command = (Command) o;

        return new EqualsBuilder()
                .append(javascriptCommand, command.javascriptCommand)
                .append(clientId, command.clientId)
                .isEquals();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 37)
                .append(javascriptCommand)
                .append(clientId)
                .toHashCode();
    }
}
