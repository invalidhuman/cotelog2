import math 
from collections import deque

def solution(progresses, speeds):
    answer = []
    
    # 1. 남은 기간 정리
    # queue = deque(100 - p for p in progresses)
    speeds = deque(speeds)
    
    queue = deque([])
    for percentage in progresses:
        queue.append(100-percentage)
        
    print(queue)
    
    # queue = [7, 70, 45]
    # 2. 남은 작업 percentage에서, queue의 첫 원소가 끝나는데 걸리는 일수를 기준으로 나머지도 뺄셈
    while queue:
        count = 0
        
        # 차감할 작업량을 계산하기 위해 0번 작업이 0 이하가되는데 얼마나 걸리는지 계산
        days = math.ceil(queue[0]/speeds[0]) # 0번 작업의 남은 작업 일수
        
        # 나머지 원소에서도 days만큼일하면 얼마나 작업이 처리되는지 계산
        for i in range(len(queue)): # 실시간으로 queue의 길이가 줄어들기 때문에 n으로 하면안됨
            queue[i] -= days*speeds[i]
        
        # 다 끝나면 [0,-20,40]
        while queue and queue[0]<=0:
            queue.popleft()
            speeds.popleft()
            count+=1
                
        answer.append(count)
    
    
    # 2. 각 작업별로 며칠 뒤에 끝나는지를 정리 (동기적)
    # queue에 추가해야하나? stack?
    #
    
    
    # 반복문 
    # 93%가 0일차이고,
    # 1일차 작업이 '완료'되면 94%가 됨 (7)
    # 7일차 작업이 '완료' -> 100% -> 배포 가능 (count++)
    
    
    # 결과 
        # 동시에 배포되는 거까지 개수를 센 뒤 answer에 append
        # 그리고 count 초기화
    
    
    return answer # 순서대로 몇 개씩 배포되는지


# 7일간 배포 -> 100 - 93
# 