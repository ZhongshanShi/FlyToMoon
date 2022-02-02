package com.flytomoon.flytomoon.repository;


import com.flytomoon.flytomoon.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

    @Query("select name from City")
    List<String> getCountryCode();

}
