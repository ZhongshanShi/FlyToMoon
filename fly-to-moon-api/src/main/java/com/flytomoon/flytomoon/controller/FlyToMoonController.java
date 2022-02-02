package com.flytomoon.flytomoon.controller;

import com.flytomoon.flytomoon.model.City;
import com.flytomoon.flytomoon.model.ResponseMessage;
import com.flytomoon.flytomoon.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/flytomoon.com/api")
public class FlyToMoonController {

    @Autowired
    CityRepository cityRepository;

    @GetMapping("/healthCheck")
    public ResponseEntity<ResponseMessage> healthCheck() {
        String message = "healthcheck successful";
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(200, message));
    }

    @GetMapping("/getCity")
    public List<City> getCity() {

        return cityRepository.findAll();
    }

    @GetMapping("/getCountryCode")
    public List<String> getCountryCode() {

        return cityRepository.getCountryCode();
    }

}
