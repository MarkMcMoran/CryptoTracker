package com.MarkMcMoran.CryptoTracker;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;

@RepositoryRestResource
interface CryptoRepository extends CrudRepository<Crypto, UUID> {

}
