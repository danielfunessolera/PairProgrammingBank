package com.PairProgrammingBank.PairProgrammingBank.bankAccount;

import com.PairProgrammingBank.PairProgrammingBank.user.User;
import com.PairProgrammingBank.PairProgrammingBank.user.UserDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class BankAccountDaoService {

    @Autowired
    UserDaoService userDaoService;
    private static List<BankAccount> accounts = new ArrayList<>();
    private static int bankCount = 0;

    public List<BankAccount> saveBankAccount (BankAccount account) {
        accounts.add(account);
        return accounts;
    }

    public List<BankAccount> deleteById (List<BankAccount> accounts, String id) {
        Predicate<? super BankAccount> predicate = account -> account.getId().equals(id);
        accounts.removeIf(predicate);
        return accounts;
    }
    public List<BankAccount> addBankAccount(String id, BankAccount bankAccount){
        List<BankAccount> Banks = userDaoService.findOne(id).getBankAccounts();
        Banks.add(Banks.size(), bankAccount);
        Banks.get(Banks.size()-1).setBankName(bankAccount.getBankName());
        System.out.println(Banks.get(Banks.size()-1).getBankName());
        System.out.println(bankAccount.getAccountName());
        return Banks;
    }
}


