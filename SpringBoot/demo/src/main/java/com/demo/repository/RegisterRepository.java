//package com.demo.repository;
//
//public class RegisterRepository {
//}
package com.demo.repository;
import com.demo.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> {}