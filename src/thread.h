#include <pthread.h>

pthread_mutex_t Mutex_init() {
  pthread_mutex_t mutex;

  int result = pthread_mutex_init(&mutex, NULL);

  assert(result == 0);

  return mutex;
}

pthread_t Thread_init() {
  pthread_t thread = 0;

  return thread;
}

int Thread_create(pthread_t *thread, const pthread_attr_t *attr, Lambda *lamb, void *arg) {
  int result = pthread_create(thread, attr, lamb->callback, arg);

  return result;
}
