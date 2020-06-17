#include <unistd.h>
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

bool Thread_create(pthread_t *thread, Lambda *lamb, void *arg) {
  int result = pthread_create(thread, NULL, lamb->callback, arg);

  return result == 0;
}

int Thread_getcpucount() {
#ifdef _SC_NPROCESSORS_ONLN
  return sysconf(_SC_NPROCESSORS_ONLN);
#else
  return 2;
#endif
}

pthread_cond_t Cond_init() {
  pthread_cond_t condition;

  int result = pthread_cond_init(&condition, NULL);

  assert(result == 0);

  return condition;
}
