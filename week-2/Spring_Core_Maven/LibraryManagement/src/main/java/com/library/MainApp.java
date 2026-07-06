package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        // Load Spring Context
        ApplicationContext context =
                new ClassPathXmlApplicationContext(
                        "applicationContext.xml"
                );

        // Get Bean
        BookService bookService =
                (BookService) context.getBean("bookService");

        // Test
        bookService.displayService();
    }
}