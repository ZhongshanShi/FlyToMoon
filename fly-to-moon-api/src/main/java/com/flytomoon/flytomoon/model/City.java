package com.flytomoon.flytomoon.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class City implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;

    @Column(name="Name")
    private String name;

    @Column(name="CountryCode")
    private String countryCode;

    @Column(name="District")
    private String district;

    @Column(name="Population")
    private Integer population;



}
