package com.example.oblig3biletterdb;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

//import java.util.ArrayList;
import java.util.List;

@RestController
class BiletterController {
    @Autowired
    private BilettRepository rep;

    // Lagrer biletten
    @PostMapping("/lagre")
    public void lagre(Biletter bilett) {
        rep.lagreBilett(bilett);
    }

    // returnerer
    @GetMapping("/hentAlle")
    public List<Biletter> hentAlle() {
        return rep.hentAlleBiletter();
    }

    // Sletter
    @GetMapping("/slettAlle")
    public void slettAlleBiletter() {
        rep.slettBiletter();
    }
}
