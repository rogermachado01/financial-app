
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface CreateUser {
    password: string;
    email: string;
}

export interface Node {
    id: string;
}

export interface IQuery {
    me(): User | Promise<User>;
    user(id: string): User | Promise<User>;
}

export interface IMutation {
    createUser(data?: CreateUser): User | Promise<User>;
}

export interface User extends Node {
    id: string;
    username?: string;
    password?: string;
    email?: string;
    role?: Role;
}
