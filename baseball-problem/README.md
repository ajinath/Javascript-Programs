# Baseball Game

You are keeping the baseball with strange rules. The Game consist of several rounds, Where the score of 
past rounds may affect future round score. You are given a list of strings ‘OPS’ where OPS[i] operation 
you must have to perform on records and is one of the following -


- An Integer X — Record a new score
- “+” Record a new score i.e the sum of previous 2 score. It is guarantee that there will be alway 2 scores.
- “ D” Record a new score i.e double the previous score. It is guarantee that there will be a previous score.
- “C” Invalidate the previous score, removing from the record. It is guarantee that there will be a previous score.

Return the sum of records.

## Example
Input — [5, 2, C, D, +]

Output - 30

Explanation - 
- 5 - Add 5 to record now records is [5].
- 2 - Add 2 to record now records is [5, 2]
- C - Remove the previous score, now records is [5]
- D - Add 2 * 5 = 10 to the records, now record is [5, 10]
- Add 5 + 10 = 15 to the records, now records is [5, 10, 15]

The total of sum is 5 + 10 + 15 = 30
