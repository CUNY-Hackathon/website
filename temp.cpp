#include <iostream>

using namespace std;

int main() {
	int num1, num2;

	cout << "Enter 1st number: ";
	cin >> num1;
	cout << "Enter 2nd number: ";
	cin >> num2;

	for(int i = num1; i <= num2; i++) {
		cout << i << " ";
	}

	return 0;
}
