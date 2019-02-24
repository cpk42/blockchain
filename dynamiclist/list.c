#include <stdlib.h>
#include <stdio.h>

typedef struct s_list {
    int data;
    struct s_list *next;
} t_list;

t_list *init_list(int data) {
    t_list *temp;

    if (!(temp = (t_list *)malloc(sizeof(t_list *))))
        return (NULL);
    temp->data = data;
    temp->next = NULL;
    return (temp);
}

int main()
{
    t_list *head = init_list(0);
    t_list *ptr = head;

    for (int i = 1; i < 7; i++) {
        head->next = init_list(i);
        head = head->next;
    }
    while (ptr) {
        printf("%d\n", ptr->data);
        ptr = ptr->next;
    }
}
