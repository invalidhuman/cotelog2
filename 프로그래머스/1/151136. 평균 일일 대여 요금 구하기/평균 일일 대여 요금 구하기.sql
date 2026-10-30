-- 코드를 입력하세요
SELECT ROUND(AVG(DAILY_FEE),0) AS AVERAGE_FEE

FROM CAR_RENTAL_COMPANY_CAR

WHERE CAR_TYPE = 'SUV'
# WHERE 절에서는 집계함수 (AVG(SALARY) 등)를 사용할 수 없다.

# GROUP BY

# HAVING

# ORDER BY

# 자동차 종류가 SUV 인 자동차들의 평균 일일 대여 요금을 출력하는 SQL문을 작성해주세요
# CAR_RENTAL_COMPANY_CAR