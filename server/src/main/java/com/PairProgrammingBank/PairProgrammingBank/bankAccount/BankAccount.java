package com.PairProgrammingBank.PairProgrammingBank.bankAccount;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.Nonnull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BankAccount {

    private String id;
    private String accountName;
    private String bankName;
    private float savings;

//    public BankAccount(String accountName, String bankName, float savings) {
//        //this.id = id;
//        this.accountName = accountName;
//        this.bankName = bankName;
//        this.savings = savings;
//    }

}
