package com.flytomoon.flytomoon.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseMessage {
     int statusCode;
     String message;
}
