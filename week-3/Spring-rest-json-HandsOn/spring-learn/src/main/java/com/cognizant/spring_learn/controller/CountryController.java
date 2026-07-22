package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {


    @Autowired
    private CountryService countryService;


    // Previous HandsOn: Get India country
    @RequestMapping("/country")
    public Country getCountryIndia() {

        return countryService.getCountry("IN");
    }


    // Current HandsOn: Get country based on code
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable("code") String code) {

        return countryService.getCountry(code);
    }
}