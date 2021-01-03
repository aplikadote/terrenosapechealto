package cl.terrenosapechealto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
//@Controller
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

//    @RequestMapping("")
//    public String index() {
//        return "index";
//    }
//
//    @RequestMapping("/{page}.html")
//    public String redirect(@PathVariable(name = "page") String page) {
//        return page;
//    }
}