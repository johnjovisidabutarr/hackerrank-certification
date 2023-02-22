package main

import (
	"fmt"
)

func main() {
	strArr := []string{"Colorado", "Utah", "Montana", "Wisconsin", "Oregon", "Maine"}
	result := remainderSorting(strArr)
	fmt.Println(result)
}

func remainderSorting(strArr []string) []string {
	slice := make([][]interface{}, len(strArr))
	for i := 0; i < len(strArr); i++ {
		slice[i] = []interface{}{strArr[i], len(strArr[i]), len(strArr[i]) % 3}
	}

	// fmt.Println(slice)

	for i := 0; i < len(slice); i++ {
		for j := i + 1; j < len(slice); j++ {
			if slice[i][2].(int) > slice[j][2].(int) {
				slice[j], slice[i] = slice[i], slice[j]
			} else if slice[i][2].(int) == slice[j][2].(int) && slice[i][0].(string) > slice[j][0].(string) {
				slice[j], slice[i] = slice[i], slice[j]
			}
		}
	}

	// fmt.Println(slice)

	answer := make([]string, len(slice))
	for i := 0; i < len(slice); i++ {
		answer[i] = slice[i][0].(string)
	}

	return answer
}
