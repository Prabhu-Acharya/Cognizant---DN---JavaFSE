package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;


@Service
public class CountryService {


    public Country getCountry(String code) {


        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");


        Country india =
                (Country) context.getBean("countryIndia");


        Country usa =
                (Country) context.getBean("countryUSA");


        Country japan =
                (Country) context.getBean("countryJapan");


        List<Country> countries =
                Arrays.asList(india, usa, japan);


        for(Country country : countries) {

            if(country.getCode()
                    .equalsIgnoreCase(code)) {

                return country;
            }
        }


        return null;
    }
}