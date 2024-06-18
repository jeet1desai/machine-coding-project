Cursor Pagination
- Page 1 // offset=0, limit=4
- Page 2 // offset=4, limit=4
- Page 3 // offset=8, limit=4

While moving to new page other 2 record come in db, it will repeat in next page

Real time (Dynamic)
No skip data

cursor = 7 // uniq id
limit = 4
[7, 8, 9, 10]

Pros 
- No data skip
- Faster then offset
- Real time (Dynamic)

Cons
- Sort 
- Implementation