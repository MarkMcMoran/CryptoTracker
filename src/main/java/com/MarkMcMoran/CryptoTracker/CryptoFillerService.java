package com.MarkMcMoran.CryptoTracker;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;

@Service
public class CryptoFillerService {
    private final CryptoRepository CryptoRepo;

    public CryptoFillerService(CryptoRepository CryptoRepo) {

        this.CryptoRepo = CryptoRepo;
    }

    @PostConstruct
    @Transactional
    public void fillData() {
        Timestamp tstamp = new Timestamp(System.currentTimeMillis());

        Crypto crypt = new Crypto(tstamp, "{\"CryptoVal\":\"123abc\"}");
        CryptoRepo.save(crypt);

    }
}
