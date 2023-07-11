package com.PairProgrammingBank.PairProgrammingBank;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PairProgrammingBankApplication {

	public static void main(String[] args) {
		SpringApplication.run(PairProgrammingBankApplication.class, args);
		WebDriver gDriver = new ChromeDriver();
		gDriver.get("http://www.google.com");

		gDriver.findElement(By.id("W0wltc")).click();
		WebElement element = gDriver.findElement(By.id("APjFqb"));
		element.sendKeys("Población mundial 2023");
		element.submit();
	}

}
