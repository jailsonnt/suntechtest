package com.github.jailsonnt.suntechtest.repository;

import com.github.jailsonnt.suntechtest.dao.UserDao;
import com.github.jailsonnt.suntechtest.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UserDao, Long> {
    @Query(name = "UserDao.findUsersByLikeFilters")
    Page<User> findUsersByLikeFilters(final Pageable pageable,
                                      @Param("usernameFilter") String usernameFilter,
                                      @Param("nameFilter") String nameFilter,
                                      @Param("emailFilter") String emailFilter);

}
