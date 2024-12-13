//package com.demo.controller;
//
//public class RegisterControllerRepo {
//}
package com.demo.controller;
import java.util.List;import com.demo.entity.Register;
import com.demo.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController@RequestMapping("/api/v5")
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterControllerRepo
{    @Autowired    private RegisterRepository registerRepository;
    @GetMapping("/register")
    public List<Register> getRegisterList()
    {        return registerRepository.findAll();    }
    @GetMapping("/register/{id}")
    public Register getRegisterById(@PathVariable(value = "id") Integer id) {
        return registerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Register not found with ID: " + id));
    }
    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register) {
        System.out.println("Create Register!");
        return registerRepository.save(register);    }}