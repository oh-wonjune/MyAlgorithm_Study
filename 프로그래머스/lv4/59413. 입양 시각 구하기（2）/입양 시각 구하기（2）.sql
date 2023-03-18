-- 코드를 입력하세요
set @hour = -1;
select
    (@hour := @hour +1) as HOUR,
    (select count(*) from animal_outs where DATE_FORMAT(DATETIME, '%H') = @hour) as 'COUNT'
from animal_outs 
where @hour < 23