from django.db import models


class Category(models.Model):
    name = models.CharField('Наименование', max_length=100)
    slug = models.SlugField(unique=True, max_length=150)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Exhibit(models.Model):
    photo = models.ImageField(
        'Фотография', upload_to='exhibits/photo/%Y/%m/%d/')
    name = models.CharField('Наименование', max_length=255)
    description = models.TextField('Описание')
    date_added = models.DateTimeField('Дата добавления', auto_now_add=True)
    category = models.ForeignKey(
        Category, verbose_name='Категория', on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Экспонат'
        verbose_name_plural = 'Экспонаты'
