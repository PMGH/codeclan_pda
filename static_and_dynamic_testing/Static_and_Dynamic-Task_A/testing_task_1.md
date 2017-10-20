### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
def func1 val
  if val = 1  <!-- need to use the == comparator -->
  return true
  else
  return false
  end
end


dif max a b
<!-- function should be defined using 'def' not 'dif' and arguments should be comma separated -->
  if a > b
      return a
  else
  b
  end
end
end <!-- additional 'end' not needed -->

def looper
  for i in 1..10
  puts i
  end
end
<!-- would run but doesn't match requirement of test below, just puts 1 to 10 to the screen, doesn't return anything -->

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
<!-- test would error, missing an end -->
<!-- if end was added the test would return "looper failed". Looper function doesn't match what test is asking for. Looper function puts each number from 1 to 10 but the test checks if the returned value from looper is 10. The looper function would return nil so the test would fail. -->

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end
<!-- no errors (assuming function above is amended), func1(3) would return false and test would pass, puts "func1(3) passed" because the input 3 does not equal 1 -->


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1  <!-- 'failrues' typo/new variable, should this be 'failures'? -->
end
<!-- max(100,1) would return 100 and test would pass, puts "max(100,1) passed" because 100 (a) is more than 1 (b). Also, single letter variable names not considered best practice. -->


if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
<!-- test would puts "Test Failed" as failures variable exists (true), no condition given for if statement -->

```
