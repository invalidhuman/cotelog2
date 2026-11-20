from collections import deque

def bfs(start, target, maps):
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    n = len(maps)
    m = len(maps[0])
    
    queue = deque( [ (start[0],start[1], 0)])
    
    visited = [ [False for _ in range(m)] for _ in range(n)]
    visited[start[0]][start[1]] = True
    
    while (queue):
        x,y,dist = queue.popleft()

        if [x,y] == target:
            return dist


        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            inRange = nx >=0 and nx < n and ny >=0 and ny < m

            if (inRange and maps[nx][ny]!='X' and not visited[nx][ny]):
                queue.append((nx,ny,dist+1))
                visited[nx][ny] = True

    # while 안에서 안끝나고 빠져나온다면, queue가 비었는데도 target에 도달하지못함
    return -1


def solution(maps):
    answer = 0
    
    distToL = 0
    distToE = 0
    
    # BFS를 두 번 쓴다.
        
    n = len(maps)
    m = len(maps[0])
    
    
    s = []
    l = []
    e = []
    
    # S,L,E 찾기
    for i in range(n):
        for j in range(m):
            if maps[i][j]=='S':
                s=[i,j]
            if maps[i][j]=="L":
                l=[i,j]
            if maps[i][j]=="E":
                e=[i,j]
                                  
    distToL = bfs(s,l,maps)
    if (distToL == -1): return -1
                         
                         
    distToE = bfs(l,e,maps)
    if (distToE == -1): return -1
    
    return distToL + distToE