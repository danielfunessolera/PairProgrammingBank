package com.PairProgrammingBank.PairProgrammingBank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(CorsConfig.class)
public class PairProgrammingBankApplication {

	public static void main(String[] args) {SpringApplication.run(PairProgrammingBankApplication.class, args);		}

}
