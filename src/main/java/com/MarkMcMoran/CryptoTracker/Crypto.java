package com.MarkMcMoran.CryptoTracker;

import com.fasterxml.jackson.databind.JsonNode;
import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cryptocurrencyprices")
@TypeDef(
        typeClass = JsonType.class,
        defaultForType = JsonNode.class
)

public class Crypto extends EntityWithUUID {
    private Timestamp date;
    private String details;

}
