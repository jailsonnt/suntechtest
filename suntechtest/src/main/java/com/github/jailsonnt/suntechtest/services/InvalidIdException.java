package com.github.jailsonnt.suntechtest.services;

public class InvalidIdException extends BusinessException {
    public InvalidIdException(){
        super("The ID received was not found.");
    }
}
