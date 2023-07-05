package com.PairProgrammingBank.PairProgrammingBank.user;

import com.PairProgrammingBank.PairProgrammingBank.bankAccount.BankAccount;

import java.util.List;

public class User {

    // Desde front
    private Integer id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String email;
    private String phone;

    private List<BankAccount> bankAccounts;

    public User(Integer id, String firstName, String lastName, String userName, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<BankAccount> getBankAccounts() {
        return bankAccounts;
    }

    public void setBankAccounts(List<BankAccount> bankAccounts) {
        this.bankAccounts = bankAccounts;
    }
}