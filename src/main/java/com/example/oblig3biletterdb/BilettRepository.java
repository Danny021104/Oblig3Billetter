package com.example.oblig3biletterdb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BilettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBilett(Biletter bilett) {
        String sql = "INSERT INTO Biletter (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, bilett.getFilm(), bilett.getAntall(), bilett.getFornavn(), bilett.getEtternavn(), bilett.getTelefonnr(), bilett.getEpost());
    }

    // sorterer bilettene etter etternavn
    public List<Biletter> hentAlleBiletter() {
        String sql = "SELECT * FROM Biletter ORDER BY Etternavn";
        return db.query(sql, new BeanPropertyRowMapper(Biletter.class));
    }

    public void slettBiletter(){
        String sql = "DELETE FROM Biletter";
        db.update(sql);
    }
}