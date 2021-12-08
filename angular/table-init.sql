-- auto-generated definition
create table user
(
    user_id    varchar(36) not null
        primary key,
    username   varchar(16) not null,
    password   varchar(50) not null,
    first_name varchar(30) null,
    last_name  varchar(30) null,
    token      varchar(80) null
);

-- auto-generated definition
create table posts
(
    post_id       varchar(36) not null
        primary key,
    title         varchar(80) null,
    content       text        null,
    suggestion_id varchar(36) null,
    user_id       varchar(36) null,
    constraint posts_user_fk
        foreign key (user_id) references user (user_id)
);

-- auto-generated definition
create table suggestions
(
    suggestion_id varchar(36) not null
        primary key,
    post_id       varchar(36) null,
    content       text        null,
    user_id       varchar(36) null,
    constraint suggestions_posts_post_id_fk
        foreign key (post_id) references posts (post_id),
    constraint suggestions_user_user_id_fk
        foreign key (user_id) references user (user_id)
);


