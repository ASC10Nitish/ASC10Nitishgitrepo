
package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.demo.entity.Hospital;

@Repository
public interface HospitalRepository  extends JpaRepository<Hospital, Integer> {
}
