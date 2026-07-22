package com.cognizant.jwt.controller;

import com.cognizant.jwt.model.AuthenticationResponse;
import com.cognizant.jwt.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        // Remove "Basic "
        String encodedCredentials = authorizationHeader.substring(6);

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":", 2);
        String username = values[0];

        String token = JwtUtil.generateToken(username);

        return new AuthenticationResponse(token);
    }
}