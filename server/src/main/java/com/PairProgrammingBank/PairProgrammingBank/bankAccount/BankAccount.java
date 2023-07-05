package com.PairProgrammingBank.PairProgrammingBank.bankAccount;

public class BankAccount {

    private Integer id;
    private String accountName;
    private String bankName;
    private float savings;

    public BankAccount(Integer id ,String accountName, String bankName, float savings) {
        this.id = id;
        this.accountName = accountName;
        this.bankName = bankName;
        this.savings = savings;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public float getSavings() {
        return savings;
    }

    public void setSavings(float savings) {
        this.savings = savings;
    }
}
