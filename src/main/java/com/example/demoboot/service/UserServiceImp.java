package com.example.demoboot.service;

import com.example.demoboot.model.User;
import com.example.demoboot.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("userServiceImp")
public class UserServiceImp implements UserService {

   private final UserRepository userRepository;

   public UserServiceImp(UserRepository userRepository) {
      this.userRepository = userRepository;
   }

   @Override
   public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
      return userRepository.findUserByName(s);
   }

   @Override
   public void add(User user) {
      userRepository.save(user);
   }

   @Override
   public void removeById(Long id) {
      userRepository.deleteById(id);
   }

   @Override
   public void edit(User user) {
      userRepository.save(user);
   }

   @Override
   public List<User> listUsers() {
      return (List<User>) userRepository.findAll();
   }

   @Override
   public User getUserById(Long id) {
      Optional<User> optionalUser = userRepository.findById(id);
      return optionalUser.orElse(null);
   }

   @Override
   public User findByName(String username) {
      return userRepository.findUserByName(username);
   }


//
//   @Transactional
//   @Override
//   public boolean add(User user) {
//      return userDao.add(user);
//   }
//
//   @Transactional
//   @Override
//   public void removeById(Long id) {
//      userDao.removeById(id);
//   }
//
//   @Transactional
//   @Override
//   public void edit(User user) {
//      userDao.edit(user);
//   }
//
//   @Transactional(readOnly = true)
//   @Override
//   public List<User> listUsers() {
//      return userDao.listUsers();
//   }
//
//   @Transactional
//   @Override
//   public User getUserById(Long id) {
//      return userDao.getUserById(id);
//   }
//
//   @Transactional
//   @Override
//   public User findByName(String username) {
//      return userDao.findByName(username);
//   }
//
//   @Transactional
//   @Override
//   public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//      User user = findByName(name);
//      return user;
//   }

   /*

   @PersistenceContext
      private EntityManager em;

   @Override
   @Transactional
   public boolean add(User user) {
//      em.persist(user);
      User userFromDB = findByName(user.getName());
      if (userFromDB != null) {
         return false;
      }
      user.setRoles(Collections.singleton(new Role(1L, "USER")));
      em.persist(user);
      return true;
   }

   @Override
   @Transactional
   public void removeById(Long id) {
      User user = em.find(User.class, id);
      em.remove(user);
   }

   @Override
   @Transactional
   public void edit(User user) {
      em.merge(user);
   }

   @Override
   @Transactional
   public List<User> listUsers() {
      return em.createQuery("select r from User r").getResultList();
   }

   @Transactional
   @Override
   public User getUserById(Long id) {
      return em.find(User.class, id);
   }


   @Transactional
   @Override
   public User findByName(String username) {
      List<User> user = em.createQuery("select r from User r WHERE r.name =:username").setParameter("username", username).getResultList();
      if (user.size() != 0) return user.get(0);
      else return null;
   }

    */

}
