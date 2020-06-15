
exports.up = function(knex) {
    return knex.schema.createTable('imagens', function(table) {
        
        table.string('linksimagens');
        table.increments();
        
      

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('imagens');
};
