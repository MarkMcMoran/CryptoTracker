package com.MarkMcMoran.CryptoTracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;


@RestController
public class CryptoController {

    private final CryptoRepository repository;
    private String APIKEYVAL = System.getenv("APIKEYCMC");

    @Autowired
    RestTemplate restTemplate;

    CryptoController(CryptoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cryptoprices")
    public String CryptoPrices() {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        headers.add("X-CMC_PRO_API_KEY", APIKEYVAL);
        HttpEntity<String> entity = new HttpEntity<String>(headers);

        return restTemplate.exchange(
                "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
                HttpMethod.GET, entity, String.class).getBody();
    }


    @GetMapping("/fetchcryptostats")
    public String CryptoStats () {

        return "";
    }
}
