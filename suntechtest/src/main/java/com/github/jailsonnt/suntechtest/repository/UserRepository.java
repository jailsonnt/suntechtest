package com.github.jailsonnt.suntechtest.repository;

import com.github.jailsonnt.suntechtest.dao.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDao, Long> {

}
