create database Projeto_Individual;

use Projeto_Individual;

create table User(

	idUser int primary key auto_increment,
    Email varchar(30),
    Senha varchar(20),
    Re_Senha varchar(20)
    
)auto_increment = 1;

select * from Usuario;

drop table Usuario;