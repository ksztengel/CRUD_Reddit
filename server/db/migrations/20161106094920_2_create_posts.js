'use strict'

exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.integer('users_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE');
        table.string('title').notNullable().defaultTo('');
        table.string('author').notNullable().defaultTo('');
        table.string('post', 4000).notNullable().defaultTo('');
        table.string('image').notNullable();
        table.integer('votes').defaultTo(0);
        table.timestamps(true, true);
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
}
