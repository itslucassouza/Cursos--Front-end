SELECT 
    regiao as 'Região',     
    sum(populacao) as Total 
    --! avg (media) 
    from estados
    group by regiao
    order by Total desc
