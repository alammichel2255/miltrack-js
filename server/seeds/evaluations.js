/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('evaluations').del()
  await knex('evaluations').insert([
    {id: 1, eval_name: 'rowValue1', eval_date: '2013/10/03',users_id: 1},
    {id: 2, eval_name: 'rowValue2', eval_date: '2013-10-03',users_id: 1},
    {id: 3, eval_name: 'rowValue3', eval_date: '2013-10-03',users_id: 1}
  ]);
};